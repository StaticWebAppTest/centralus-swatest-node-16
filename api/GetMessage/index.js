module.exports = async function (context, req) {
  const date = "2022-11-02T20:11:56.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

