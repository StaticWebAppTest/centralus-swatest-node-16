module.exports = async function (context, req) {
  const date = "2023-05-20T22:07:36.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

