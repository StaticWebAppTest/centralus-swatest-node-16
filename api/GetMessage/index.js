module.exports = async function (context, req) {
  const date = "2023-05-15T03:09:11.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

