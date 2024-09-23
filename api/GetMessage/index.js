module.exports = async function (context, req) {
  const date = "2024-09-23T15:12:14.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

