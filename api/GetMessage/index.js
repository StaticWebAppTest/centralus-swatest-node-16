module.exports = async function (context, req) {
  const date = "2024-06-28T02:31:49.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

