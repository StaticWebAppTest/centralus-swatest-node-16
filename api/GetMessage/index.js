module.exports = async function (context, req) {
  const date = "2024-07-19T21:09:21.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

