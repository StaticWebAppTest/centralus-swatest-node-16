module.exports = async function (context, req) {
  const date = "2025-01-04T08:13:49.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

