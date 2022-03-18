module.exports = async function (context, req) {
  const date = "2022-03-18T03:13:46.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

