module.exports = async function (context, req) {
  const date = "2022-09-24T20:12:21.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

