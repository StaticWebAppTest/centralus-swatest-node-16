module.exports = async function (context, req) {
  const date = "2022-07-19T03:53:15.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

