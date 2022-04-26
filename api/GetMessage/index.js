module.exports = async function (context, req) {
  const date = "2022-04-26T14:10:02.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

