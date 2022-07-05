module.exports = async function (context, req) {
  const date = "2022-07-05T09:10:48.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

