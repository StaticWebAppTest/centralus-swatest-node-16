module.exports = async function (context, req) {
  const date = "2022-07-27T12:25:06.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

