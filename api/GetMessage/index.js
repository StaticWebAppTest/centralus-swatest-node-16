module.exports = async function (context, req) {
  const date = "2023-02-18T00:53:30.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

