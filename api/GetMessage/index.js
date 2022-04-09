module.exports = async function (context, req) {
  const date = "2022-04-09T15:10:01.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

