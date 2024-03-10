module.exports = async function (context, req) {
  const date = "2024-03-10T12:14:21.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

