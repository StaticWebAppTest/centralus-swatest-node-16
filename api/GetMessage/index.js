module.exports = async function (context, req) {
  const date = "2024-09-06T05:12:14.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

