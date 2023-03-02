module.exports = async function (context, req) {
  const date = "2023-03-02T10:11:02.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

