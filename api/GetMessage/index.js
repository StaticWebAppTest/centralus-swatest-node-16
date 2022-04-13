module.exports = async function (context, req) {
  const date = "2022-04-13T22:10:03.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

