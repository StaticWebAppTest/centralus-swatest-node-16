module.exports = async function (context, req) {
  const date = "2022-11-21T19:08:48.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

