module.exports = async function (context, req) {
  const date = "2023-09-21T03:08:55.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

