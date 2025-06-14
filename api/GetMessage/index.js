module.exports = async function (context, req) {
  const date = "2025-06-14T16:14:47.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

