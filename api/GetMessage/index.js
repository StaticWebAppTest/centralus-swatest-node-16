module.exports = async function (context, req) {
  const date = "2023-06-13T22:08:53.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

