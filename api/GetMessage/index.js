module.exports = async function (context, req) {
  const date = "2024-04-02T21:08:28.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

