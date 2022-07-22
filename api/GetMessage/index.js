module.exports = async function (context, req) {
  const date = "2022-07-22T06:15:00.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

