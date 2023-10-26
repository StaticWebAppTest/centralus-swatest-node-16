module.exports = async function (context, req) {
  const date = "2023-10-26T03:09:12.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

