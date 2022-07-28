module.exports = async function (context, req) {
  const date = "2022-07-28T19:08:22.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

