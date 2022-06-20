module.exports = async function (context, req) {
  const date = "2022-06-20T18:12:18.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

