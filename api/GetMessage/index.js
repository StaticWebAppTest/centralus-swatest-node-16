module.exports = async function (context, req) {
  const date = "2022-07-05T18:12:32.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

