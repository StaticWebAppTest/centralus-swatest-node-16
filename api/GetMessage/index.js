module.exports = async function (context, req) {
  const date = "2023-10-02T23:08:50.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

