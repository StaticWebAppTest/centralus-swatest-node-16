module.exports = async function (context, req) {
  const date = "2024-08-24T02:01:01.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

