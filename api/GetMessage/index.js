module.exports = async function (context, req) {
  const date = "2025-06-21T21:11:20.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

