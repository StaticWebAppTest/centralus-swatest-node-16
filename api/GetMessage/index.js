module.exports = async function (context, req) {
  const date = "2023-12-02T15:07:58.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

