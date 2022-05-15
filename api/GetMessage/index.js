module.exports = async function (context, req) {
  const date = "2022-05-15T20:11:27.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

