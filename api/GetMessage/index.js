module.exports = async function (context, req) {
  const date = "2023-06-02T13:16:10.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

