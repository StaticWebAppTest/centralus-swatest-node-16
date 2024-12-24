module.exports = async function (context, req) {
  const date = "2024-12-24T13:17:27.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

