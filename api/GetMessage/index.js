module.exports = async function (context, req) {
  const date = "2023-04-07T18:10:39.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

