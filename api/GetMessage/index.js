module.exports = async function (context, req) {
  const date = "2024-03-10T20:09:59.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

