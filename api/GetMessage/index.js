module.exports = async function (context, req) {
  const date = "2022-07-09T16:13:06.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

