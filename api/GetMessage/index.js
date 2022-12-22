module.exports = async function (context, req) {
  const date = "2022-12-22T17:08:38.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

