module.exports = async function (context, req) {
  const date = "2022-03-02T21:13:03.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

