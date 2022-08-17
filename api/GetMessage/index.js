module.exports = async function (context, req) {
  const date = "2022-08-17T20:11:47.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

