module.exports = async function (context, req) {
  const date = "2024-02-06T17:07:59.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

