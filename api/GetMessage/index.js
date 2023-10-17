module.exports = async function (context, req) {
  const date = "2023-10-17T13:12:29.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

