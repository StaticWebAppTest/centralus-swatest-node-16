module.exports = async function (context, req) {
  const date = "2024-07-25T14:09:29.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

