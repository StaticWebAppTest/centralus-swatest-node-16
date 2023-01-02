module.exports = async function (context, req) {
  const date = "2023-01-02T13:16:08.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

