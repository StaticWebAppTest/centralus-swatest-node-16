module.exports = async function (context, req) {
  const date = "2022-11-18T08:13:57.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

