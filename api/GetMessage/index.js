module.exports = async function (context, req) {
  const date = "2025-01-08T04:14:30.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

