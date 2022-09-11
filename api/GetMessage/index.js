module.exports = async function (context, req) {
  const date = "2022-09-11T08:14:13.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

