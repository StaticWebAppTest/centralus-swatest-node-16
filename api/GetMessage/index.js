module.exports = async function (context, req) {
  const date = "2022-12-22T20:09:38.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

