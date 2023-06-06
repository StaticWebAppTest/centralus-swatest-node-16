module.exports = async function (context, req) {
  const date = "2023-06-06T03:15:04.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

