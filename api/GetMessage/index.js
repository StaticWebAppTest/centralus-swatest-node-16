module.exports = async function (context, req) {
  const date = "2023-05-18T09:08:29.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

