module.exports = async function (context, req) {
  const date = "2022-07-27T18:13:05.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

