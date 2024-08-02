module.exports = async function (context, req) {
  const date = "2024-08-02T06:16:21.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

