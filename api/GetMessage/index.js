module.exports = async function (context, req) {
  const date = "2023-12-18T06:13:08.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

