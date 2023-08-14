module.exports = async function (context, req) {
  const date = "2023-08-14T02:13:30.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

