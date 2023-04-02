module.exports = async function (context, req) {
  const date = "2023-04-02T16:10:17.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

