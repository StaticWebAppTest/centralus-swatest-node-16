module.exports = async function (context, req) {
  const date = "2023-06-15T13:12:55.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

