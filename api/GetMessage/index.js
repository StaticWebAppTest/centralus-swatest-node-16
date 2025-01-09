module.exports = async function (context, req) {
  const date = "2025-01-09T04:14:18.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

