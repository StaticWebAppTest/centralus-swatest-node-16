module.exports = async function (context, req) {
  const date = "2025-01-14T19:09:02.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

