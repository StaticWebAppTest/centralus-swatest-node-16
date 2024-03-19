module.exports = async function (context, req) {
  const date = "2024-03-19T17:08:57.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

