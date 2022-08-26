module.exports = async function (context, req) {
  const date = "2022-08-26T20:12:13.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

