module.exports = async function (context, req) {
  const date = "2023-01-02T20:09:30.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

