module.exports = async function (context, req) {
  const date = "2024-01-04T04:11:15.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

