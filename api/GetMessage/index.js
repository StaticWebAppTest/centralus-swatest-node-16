module.exports = async function (context, req) {
  const date = "2024-04-02T04:11:21.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

