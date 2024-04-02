module.exports = async function (context, req) {
  const date = "2024-04-02T13:09:52.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

