module.exports = async function (context, req) {
  const date = "2022-11-03T15:16:57.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

