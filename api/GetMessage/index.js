module.exports = async function (context, req) {
  const date = "2024-05-23T22:09:15.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

