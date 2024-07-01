module.exports = async function (context, req) {
  const date = "2024-07-01T07:10:59.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

