module.exports = async function (context, req) {
  const date = "2023-07-02T07:08:21.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

