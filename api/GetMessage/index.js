module.exports = async function (context, req) {
  const date = "2024-07-30T00:50:25.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

