module.exports = async function (context, req) {
  const date = "2024-05-18T04:11:25.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

