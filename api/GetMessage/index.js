module.exports = async function (context, req) {
  const date = "2023-05-26T13:10:46.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

