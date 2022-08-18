module.exports = async function (context, req) {
  const date = "2022-08-18T17:30:34.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

