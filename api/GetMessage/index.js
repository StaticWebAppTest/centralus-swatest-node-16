module.exports = async function (context, req) {
  const date = "2024-03-22T05:09:50.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

