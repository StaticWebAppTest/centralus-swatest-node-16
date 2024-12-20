module.exports = async function (context, req) {
  const date = "2024-12-20T04:14:26.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

