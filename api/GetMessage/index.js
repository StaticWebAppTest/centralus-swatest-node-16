module.exports = async function (context, req) {
  const date = "2022-05-19T15:17:05.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

