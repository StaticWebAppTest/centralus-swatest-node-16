module.exports = async function (context, req) {
  const date = "2025-01-23T21:10:31.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

