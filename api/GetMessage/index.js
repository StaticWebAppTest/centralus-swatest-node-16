module.exports = async function (context, req) {
  const date = "2024-12-05T21:11:44.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

