module.exports = async function (context, req) {
  const date = "2023-01-18T05:09:14.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

