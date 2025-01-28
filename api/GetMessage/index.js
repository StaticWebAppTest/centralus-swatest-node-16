module.exports = async function (context, req) {
  const date = "2025-01-28T20:12:25.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

