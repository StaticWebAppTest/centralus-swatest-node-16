module.exports = async function (context, req) {
  const date = "2023-01-20T13:17:39.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

