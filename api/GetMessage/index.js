module.exports = async function (context, req) {
  const date = "2022-12-15T23:10:10.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

