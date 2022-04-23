module.exports = async function (context, req) {
  const date = "2022-04-23T11:08:51.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

