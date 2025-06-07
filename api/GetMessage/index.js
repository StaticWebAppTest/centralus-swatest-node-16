module.exports = async function (context, req) {
  const date = "2025-06-07T01:06:12.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

