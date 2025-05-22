module.exports = async function (context, req) {
  const date = "2025-05-22T08:18:14.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

