module.exports = async function (context, req) {
  const date = "2022-03-07T19:08:46.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

