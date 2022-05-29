module.exports = async function (context, req) {
  const date = "2022-05-29T20:12:06.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

