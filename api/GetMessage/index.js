module.exports = async function (context, req) {
  const date = "2022-03-11T07:09:59.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

