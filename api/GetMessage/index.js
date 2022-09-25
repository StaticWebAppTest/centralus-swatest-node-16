module.exports = async function (context, req) {
  const date = "2022-09-25T20:12:39.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

