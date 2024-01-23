module.exports = async function (context, req) {
  const date = "2024-01-23T04:11:56.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

