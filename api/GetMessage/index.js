module.exports = async function (context, req) {
  const date = "2025-08-27T22:11:53.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

