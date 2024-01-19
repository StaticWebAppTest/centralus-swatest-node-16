module.exports = async function (context, req) {
  const date = "2024-01-19T04:12:01.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

