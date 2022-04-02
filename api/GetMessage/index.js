module.exports = async function (context, req) {
  const date = "2022-04-02T19:08:38.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

