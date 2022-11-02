module.exports = async function (context, req) {
  const date = "2022-11-02T19:09:32.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

