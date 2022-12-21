module.exports = async function (context, req) {
  const date = "2022-12-21T22:08:48.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

