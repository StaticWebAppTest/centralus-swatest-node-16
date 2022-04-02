module.exports = async function (context, req) {
  const date = "2022-04-02T17:10:58.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

