module.exports = async function (context, req) {
  const date = "2023-12-21T08:11:58.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

