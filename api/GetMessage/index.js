module.exports = async function (context, req) {
  const date = "2022-12-25T08:11:29.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

