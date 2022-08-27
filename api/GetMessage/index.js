module.exports = async function (context, req) {
  const date = "2022-08-27T23:10:48.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

