module.exports = async function (context, req) {
  const date = "2023-07-27T22:07:56.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

