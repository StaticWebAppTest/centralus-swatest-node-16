module.exports = async function (context, req) {
  const date = "2022-07-25T19:08:49.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

