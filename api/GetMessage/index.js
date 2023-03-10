module.exports = async function (context, req) {
  const date = "2023-03-10T19:07:29.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

