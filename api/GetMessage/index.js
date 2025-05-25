module.exports = async function (context, req) {
  const date = "2025-05-25T16:14:20.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

