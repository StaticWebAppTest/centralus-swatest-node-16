module.exports = async function (context, req) {
  const date = "2022-03-02T07:09:41.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

