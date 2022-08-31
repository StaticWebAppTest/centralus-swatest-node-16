module.exports = async function (context, req) {
  const date = "2022-08-31T06:19:32.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

