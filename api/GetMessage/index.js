module.exports = async function (context, req) {
  const date = "2022-05-18T10:12:26.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

