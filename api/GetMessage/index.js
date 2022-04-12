module.exports = async function (context, req) {
  const date = "2022-04-12T04:12:42.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

