module.exports = async function (context, req) {
  const date = "2022-03-11T21:08:39.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

