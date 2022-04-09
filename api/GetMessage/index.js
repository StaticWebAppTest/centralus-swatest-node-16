module.exports = async function (context, req) {
  const date = "2022-04-09T04:12:55.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

