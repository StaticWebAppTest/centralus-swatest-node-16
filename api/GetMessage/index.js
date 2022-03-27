module.exports = async function (context, req) {
  const date = "2022-03-27T12:15:52.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

