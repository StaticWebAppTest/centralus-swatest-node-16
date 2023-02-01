module.exports = async function (context, req) {
  const date = "2023-02-01T06:13:03.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

