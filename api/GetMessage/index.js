module.exports = async function (context, req) {
  const date = "2022-03-01T06:12:43.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

