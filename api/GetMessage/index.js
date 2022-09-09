module.exports = async function (context, req) {
  const date = "2022-09-09T01:09:57.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

