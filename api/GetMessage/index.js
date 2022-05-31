module.exports = async function (context, req) {
  const date = "2022-05-31T12:21:57.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

