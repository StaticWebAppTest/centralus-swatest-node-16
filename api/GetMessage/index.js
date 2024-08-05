module.exports = async function (context, req) {
  const date = "2024-08-05T03:11:57.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

