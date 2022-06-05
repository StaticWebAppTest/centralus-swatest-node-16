module.exports = async function (context, req) {
  const date = "2022-06-05T18:12:29.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

