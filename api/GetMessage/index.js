module.exports = async function (context, req) {
  const date = "2024-01-04T12:16:37.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

