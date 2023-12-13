module.exports = async function (context, req) {
  const date = "2023-12-13T23:09:35.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

