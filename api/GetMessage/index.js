module.exports = async function (context, req) {
  const date = "2025-02-09T21:10:32.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

