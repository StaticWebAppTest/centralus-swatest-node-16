module.exports = async function (context, req) {
  const date = "2022-07-07T20:11:37.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

