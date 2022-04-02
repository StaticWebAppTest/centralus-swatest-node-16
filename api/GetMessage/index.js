module.exports = async function (context, req) {
  const date = "2022-04-02T05:09:16.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

