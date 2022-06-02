module.exports = async function (context, req) {
  const date = "2022-06-02T01:01:19.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

