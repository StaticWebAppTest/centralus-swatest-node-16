module.exports = async function (context, req) {
  const date = "2022-12-17T16:11:31.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

