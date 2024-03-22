module.exports = async function (context, req) {
  const date = "2024-03-22T13:09:16.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

