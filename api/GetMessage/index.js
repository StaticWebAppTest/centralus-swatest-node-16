module.exports = async function (context, req) {
  const date = "2023-06-20T22:07:58.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

