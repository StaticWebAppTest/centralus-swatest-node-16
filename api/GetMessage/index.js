module.exports = async function (context, req) {
  const date = "2024-01-04T06:12:28.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

