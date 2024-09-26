module.exports = async function (context, req) {
  const date = "2024-09-26T19:09:05.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

