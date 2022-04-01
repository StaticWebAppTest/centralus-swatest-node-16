module.exports = async function (context, req) {
  const date = "2022-04-01T08:14:02.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

