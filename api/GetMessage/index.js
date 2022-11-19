module.exports = async function (context, req) {
  const date = "2022-11-19T07:09:33.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

