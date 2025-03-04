module.exports = async function (context, req) {
  const date = "2025-03-04T08:14:46.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

