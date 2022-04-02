module.exports = async function (context, req) {
  const date = "2022-04-02T07:10:02.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

