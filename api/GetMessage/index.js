module.exports = async function (context, req) {
  const date = "2022-07-02T18:11:55.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

