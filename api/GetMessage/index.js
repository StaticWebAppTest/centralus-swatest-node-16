module.exports = async function (context, req) {
  const date = "2022-12-19T21:08:54.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

