module.exports = async function (context, req) {
  const date = "2022-11-09T07:12:35.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

