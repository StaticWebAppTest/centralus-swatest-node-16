module.exports = async function (context, req) {
  const date = "2022-03-02T20:10:41.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

