module.exports = async function (context, req) {
  const date = "2022-07-25T20:11:05.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

