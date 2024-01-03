module.exports = async function (context, req) {
  const date = "2024-01-03T02:21:09.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

