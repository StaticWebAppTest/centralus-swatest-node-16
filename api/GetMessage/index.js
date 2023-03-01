module.exports = async function (context, req) {
  const date = "2023-03-01T04:12:27.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

