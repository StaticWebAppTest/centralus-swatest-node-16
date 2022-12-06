module.exports = async function (context, req) {
  const date = "2022-12-06T21:08:57.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

