module.exports = async function (context, req) {
  const date = "2022-11-02T01:10:59.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

