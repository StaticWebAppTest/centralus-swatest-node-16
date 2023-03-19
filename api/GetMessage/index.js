module.exports = async function (context, req) {
  const date = "2023-03-19T22:08:40.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

