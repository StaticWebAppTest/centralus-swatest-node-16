module.exports = async function (context, req) {
  const date = "2025-03-03T16:15:06.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

