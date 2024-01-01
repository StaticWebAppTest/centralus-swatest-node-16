module.exports = async function (context, req) {
  const date = "2024-01-01T04:11:52.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

