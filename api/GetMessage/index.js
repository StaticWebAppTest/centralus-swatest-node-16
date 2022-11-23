module.exports = async function (context, req) {
  const date = "2022-11-23T20:10:25.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

