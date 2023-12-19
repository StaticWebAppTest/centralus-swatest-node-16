module.exports = async function (context, req) {
  const date = "2023-12-19T02:22:47.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

