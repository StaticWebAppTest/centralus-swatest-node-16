module.exports = async function (context, req) {
  const date = "2022-08-06T13:20:46.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

