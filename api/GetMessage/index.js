module.exports = async function (context, req) {
  const date = "2024-07-26T13:13:04.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

