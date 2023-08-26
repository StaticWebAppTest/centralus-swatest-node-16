module.exports = async function (context, req) {
  const date = "2023-08-26T15:07:27.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

