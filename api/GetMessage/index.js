module.exports = async function (context, req) {
  const date = "2022-06-01T17:20:04.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

