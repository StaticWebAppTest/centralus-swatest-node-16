module.exports = async function (context, req) {
  const date = "2025-05-19T09:15:27.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

