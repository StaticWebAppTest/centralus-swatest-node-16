module.exports = async function (context, req) {
  const date = "2022-11-01T12:27:48.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

