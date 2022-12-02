module.exports = async function (context, req) {
  const date = "2022-12-02T02:17:22.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

