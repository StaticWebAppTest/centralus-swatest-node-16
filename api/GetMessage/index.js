module.exports = async function (context, req) {
  const date = "2022-06-01T10:15:28.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

