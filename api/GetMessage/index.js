module.exports = async function (context, req) {
  const date = "2024-08-22T10:12:21.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

