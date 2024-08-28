module.exports = async function (context, req) {
  const date = "2024-08-28T02:05:14.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

