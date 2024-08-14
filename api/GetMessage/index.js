module.exports = async function (context, req) {
  const date = "2024-08-14T03:13:15.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

