module.exports = async function (context, req) {
  const date = "2023-09-02T13:08:27.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

