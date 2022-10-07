module.exports = async function (context, req) {
  const date = "2022-10-07T14:30:03.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

