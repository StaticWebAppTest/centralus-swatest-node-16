module.exports = async function (context, req) {
  const date = "2024-03-30T02:13:05.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

