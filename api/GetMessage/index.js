module.exports = async function (context, req) {
  const date = "2022-06-20T17:16:54.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

