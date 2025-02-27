module.exports = async function (context, req) {
  const date = "2025-02-27T15:13:39.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

