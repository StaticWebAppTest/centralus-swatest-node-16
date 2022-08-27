module.exports = async function (context, req) {
  const date = "2022-08-27T13:24:03.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

