module.exports = async function (context, req) {
  const date = "2024-02-18T06:11:34.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

