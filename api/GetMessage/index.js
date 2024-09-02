module.exports = async function (context, req) {
  const date = "2024-09-02T02:08:30.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

