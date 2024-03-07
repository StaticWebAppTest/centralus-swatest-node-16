module.exports = async function (context, req) {
  const date = "2024-03-07T13:09:04.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

