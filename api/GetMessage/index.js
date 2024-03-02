module.exports = async function (context, req) {
  const date = "2024-03-02T13:08:33.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

