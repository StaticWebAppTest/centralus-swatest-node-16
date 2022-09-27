module.exports = async function (context, req) {
  const date = "2022-09-27T22:13:05.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

