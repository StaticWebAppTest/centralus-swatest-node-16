module.exports = async function (context, req) {
  const date = "2023-04-03T03:09:37.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

