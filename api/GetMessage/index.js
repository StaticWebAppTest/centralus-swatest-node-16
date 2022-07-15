module.exports = async function (context, req) {
  const date = "2022-07-15T03:50:57.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

