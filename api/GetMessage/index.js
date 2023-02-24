module.exports = async function (context, req) {
  const date = "2023-02-24T19:08:13.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

