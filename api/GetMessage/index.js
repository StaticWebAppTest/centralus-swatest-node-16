module.exports = async function (context, req) {
  const date = "2023-08-02T13:12:00.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

