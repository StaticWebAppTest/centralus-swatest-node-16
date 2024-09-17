module.exports = async function (context, req) {
  const date = "2024-09-17T04:13:25.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

