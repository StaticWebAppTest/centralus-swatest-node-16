module.exports = async function (context, req) {
  const date = "2024-09-28T04:13:48.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

