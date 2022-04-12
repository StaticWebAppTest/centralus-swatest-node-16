module.exports = async function (context, req) {
  const date = "2022-04-12T15:11:39.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

