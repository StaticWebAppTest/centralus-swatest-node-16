module.exports = async function (context, req) {
  const date = "2022-12-11T21:08:13.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

