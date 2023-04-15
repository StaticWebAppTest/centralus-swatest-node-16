module.exports = async function (context, req) {
  const date = "2023-04-15T21:07:20.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

