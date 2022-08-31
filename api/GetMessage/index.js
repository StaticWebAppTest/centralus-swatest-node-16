module.exports = async function (context, req) {
  const date = "2022-08-31T13:35:02.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

