module.exports = async function (context, req) {
  const date = "2022-11-20T18:12:20.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

