module.exports = async function (context, req) {
  const date = "2024-12-02T13:23:26.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

