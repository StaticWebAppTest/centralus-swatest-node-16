module.exports = async function (context, req) {
  const date = "2024-01-05T04:11:35.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

