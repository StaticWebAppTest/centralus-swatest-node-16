module.exports = async function (context, req) {
  const date = "2023-04-02T05:07:58.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

