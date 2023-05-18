module.exports = async function (context, req) {
  const date = "2023-05-18T20:09:08.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

