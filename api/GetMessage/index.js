module.exports = async function (context, req) {
  const date = "2024-04-18T04:11:16.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

