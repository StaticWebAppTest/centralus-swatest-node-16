module.exports = async function (context, req) {
  const date = "2023-04-28T12:16:06.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

