module.exports = async function (context, req) {
  const date = "2022-08-02T05:11:38.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

