module.exports = async function (context, req) {
  const date = "2025-09-24T13:23:04.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

