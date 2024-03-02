module.exports = async function (context, req) {
  const date = "2024-03-02T12:14:27.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

