module.exports = async function (context, req) {
  const date = "2022-08-13T11:08:51.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

