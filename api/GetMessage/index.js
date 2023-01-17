module.exports = async function (context, req) {
  const date = "2023-01-17T19:07:42.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

