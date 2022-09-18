module.exports = async function (context, req) {
  const date = "2022-09-18T17:17:56.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

