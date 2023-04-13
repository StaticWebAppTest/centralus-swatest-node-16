module.exports = async function (context, req) {
  const date = "2023-04-13T05:08:31.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

