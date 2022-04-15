module.exports = async function (context, req) {
  const date = "2022-04-15T21:09:28.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

