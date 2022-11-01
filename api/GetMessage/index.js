module.exports = async function (context, req) {
  const date = "2022-11-01T15:13:09.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

