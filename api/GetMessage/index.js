module.exports = async function (context, req) {
  const date = "2022-04-25T20:11:32.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

