module.exports = async function (context, req) {
  const date = "2024-04-25T08:12:24.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

