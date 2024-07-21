module.exports = async function (context, req) {
  const date = "2024-07-21T08:12:12.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

