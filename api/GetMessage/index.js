module.exports = async function (context, req) {
  const date = "2022-05-18T02:49:56.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

