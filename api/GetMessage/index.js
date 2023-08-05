module.exports = async function (context, req) {
  const date = "2023-08-05T04:09:51.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

