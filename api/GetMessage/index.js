module.exports = async function (context, req) {
  const date = "2022-04-03T00:49:33.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

