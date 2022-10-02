module.exports = async function (context, req) {
  const date = "2022-10-02T10:13:12.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

