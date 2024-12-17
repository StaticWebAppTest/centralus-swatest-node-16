module.exports = async function (context, req) {
  const date = "2024-12-17T22:11:27.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

