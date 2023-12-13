module.exports = async function (context, req) {
  const date = "2023-12-13T07:08:51.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

