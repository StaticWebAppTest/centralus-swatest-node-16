module.exports = async function (context, req) {
  const date = "2022-11-02T14:19:56.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

