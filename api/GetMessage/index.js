module.exports = async function (context, req) {
  const date = "2022-11-06T20:12:01.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

