module.exports = async function (context, req) {
  const date = "2022-12-03T22:08:46.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

