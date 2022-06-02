module.exports = async function (context, req) {
  const date = "2022-06-02T04:40:27.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

