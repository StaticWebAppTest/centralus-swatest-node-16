module.exports = async function (context, req) {
  const date = "2025-12-24T13:27:35.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

