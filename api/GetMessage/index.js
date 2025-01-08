module.exports = async function (context, req) {
  const date = "2025-01-08T16:14:13.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

