module.exports = async function (context, req) {
  const date = "2022-12-17T10:08:47.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

