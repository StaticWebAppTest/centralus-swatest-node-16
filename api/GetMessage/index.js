module.exports = async function (context, req) {
  const date = "2024-07-21T22:09:37.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

