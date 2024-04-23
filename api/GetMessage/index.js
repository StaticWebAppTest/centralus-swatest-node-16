module.exports = async function (context, req) {
  const date = "2024-04-23T22:09:55.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

