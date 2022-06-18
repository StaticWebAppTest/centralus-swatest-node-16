module.exports = async function (context, req) {
  const date = "2022-06-18T10:10:32.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

