module.exports = async function (context, req) {
  const date = "2023-08-02T07:08:19.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

