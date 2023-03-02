module.exports = async function (context, req) {
  const date = "2023-03-02T14:09:54.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

