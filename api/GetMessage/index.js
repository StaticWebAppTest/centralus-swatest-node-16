module.exports = async function (context, req) {
  const date = "2022-03-10T06:12:28.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

