module.exports = async function (context, req) {
  const date = "2022-07-14T04:41:27.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

