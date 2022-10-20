module.exports = async function (context, req) {
  const date = "2022-10-20T18:29:38.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

