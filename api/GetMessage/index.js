module.exports = async function (context, req) {
  const date = "2024-06-19T11:09:20.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

