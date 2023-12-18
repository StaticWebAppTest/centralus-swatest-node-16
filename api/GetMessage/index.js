module.exports = async function (context, req) {
  const date = "2023-12-18T03:10:14.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

