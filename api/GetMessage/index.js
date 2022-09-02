module.exports = async function (context, req) {
  const date = "2022-09-02T05:57:08.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

