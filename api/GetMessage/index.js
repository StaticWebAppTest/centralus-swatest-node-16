module.exports = async function (context, req) {
  const date = "2023-03-22T06:11:51.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

