module.exports = async function (context, req) {
  const date = "2022-09-01T09:11:29.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

