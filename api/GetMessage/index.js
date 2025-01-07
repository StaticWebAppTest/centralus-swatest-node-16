module.exports = async function (context, req) {
  const date = "2025-01-07T04:13:55.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

