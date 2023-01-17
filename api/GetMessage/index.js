module.exports = async function (context, req) {
  const date = "2023-01-17T23:09:28.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

