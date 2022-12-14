module.exports = async function (context, req) {
  const date = "2022-12-14T20:10:30.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

