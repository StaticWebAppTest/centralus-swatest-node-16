module.exports = async function (context, req) {
  const date = "2024-03-03T03:09:28.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

