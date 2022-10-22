module.exports = async function (context, req) {
  const date = "2022-10-22T12:24:07.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

