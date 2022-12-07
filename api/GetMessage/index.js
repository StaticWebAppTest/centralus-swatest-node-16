module.exports = async function (context, req) {
  const date = "2022-12-07T11:08:05.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

