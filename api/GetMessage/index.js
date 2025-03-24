module.exports = async function (context, req) {
  const date = "2025-03-24T12:25:59.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

