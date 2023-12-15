module.exports = async function (context, req) {
  const date = "2023-12-15T16:11:55.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

