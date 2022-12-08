module.exports = async function (context, req) {
  const date = "2022-12-08T14:08:47.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

