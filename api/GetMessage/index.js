module.exports = async function (context, req) {
  const date = "2023-10-23T22:08:15.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

