module.exports = async function (context, req) {
  const date = "2022-10-02T21:11:14.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

