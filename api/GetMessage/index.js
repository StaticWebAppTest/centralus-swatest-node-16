module.exports = async function (context, req) {
  const date = "2022-11-26T08:12:33.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

