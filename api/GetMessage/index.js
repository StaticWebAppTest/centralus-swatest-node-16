module.exports = async function (context, req) {
  const date = "2024-06-04T03:12:14.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

