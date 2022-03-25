module.exports = async function (context, req) {
  const date = "2022-03-25T08:12:39.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

