module.exports = async function (context, req) {
  const date = "2025-12-24T17:12:18.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

