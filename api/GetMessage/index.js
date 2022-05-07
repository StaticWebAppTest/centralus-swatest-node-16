module.exports = async function (context, req) {
  const date = "2022-05-07T13:20:36.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

