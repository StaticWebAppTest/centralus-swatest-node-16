module.exports = async function (context, req) {
  const date = "2023-06-17T12:14:59.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

