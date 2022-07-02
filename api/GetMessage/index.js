module.exports = async function (context, req) {
  const date = "2022-07-02T16:13:06.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

