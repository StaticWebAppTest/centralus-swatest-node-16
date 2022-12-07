module.exports = async function (context, req) {
  const date = "2022-12-07T12:18:12.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

