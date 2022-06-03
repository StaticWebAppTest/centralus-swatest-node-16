module.exports = async function (context, req) {
  const date = "2022-06-03T21:08:47.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

