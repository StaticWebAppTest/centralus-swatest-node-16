module.exports = async function (context, req) {
  const date = "2022-12-22T21:08:35.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

