module.exports = async function (context, req) {
  const date = "2023-07-17T08:13:40.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

