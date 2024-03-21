module.exports = async function (context, req) {
  const date = "2024-03-21T19:08:18.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

