module.exports = async function (context, req) {
  const date = "2022-03-17T17:12:07.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

