module.exports = async function (context, req) {
  const date = "2022-07-14T06:14:32.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

