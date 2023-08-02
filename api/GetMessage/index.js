module.exports = async function (context, req) {
  const date = "2023-08-02T22:07:48.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

