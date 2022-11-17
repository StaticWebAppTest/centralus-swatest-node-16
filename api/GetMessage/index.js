module.exports = async function (context, req) {
  const date = "2022-11-17T20:11:38.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

