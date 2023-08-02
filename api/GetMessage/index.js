module.exports = async function (context, req) {
  const date = "2023-08-02T10:09:16.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

