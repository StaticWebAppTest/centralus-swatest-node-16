module.exports = async function (context, req) {
  const date = "2022-03-24T14:10:21.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

