module.exports = async function (context, req) {
  const date = "2022-03-18T19:08:03.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

