module.exports = async function (context, req) {
  const date = "2024-02-09T21:08:21.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

