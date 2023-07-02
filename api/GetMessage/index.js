module.exports = async function (context, req) {
  const date = "2023-07-02T14:08:01.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

