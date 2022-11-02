module.exports = async function (context, req) {
  const date = "2022-11-02T18:15:25.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

