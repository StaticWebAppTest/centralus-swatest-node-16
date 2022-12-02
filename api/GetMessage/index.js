module.exports = async function (context, req) {
  const date = "2022-12-02T20:10:01.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

