module.exports = async function (context, req) {
  const date = "2023-02-18T06:11:51.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

