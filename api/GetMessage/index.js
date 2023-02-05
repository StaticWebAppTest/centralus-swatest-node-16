module.exports = async function (context, req) {
  const date = "2023-02-05T13:13:04.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

