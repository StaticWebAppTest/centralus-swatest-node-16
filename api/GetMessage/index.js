module.exports = async function (context, req) {
  const date = "2022-12-19T00:45:11.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

