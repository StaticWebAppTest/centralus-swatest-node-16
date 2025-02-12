module.exports = async function (context, req) {
  const date = "2025-02-12T04:14:26.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

