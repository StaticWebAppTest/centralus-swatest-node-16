module.exports = async function (context, req) {
  const date = "2022-03-30T00:45:54.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

