module.exports = async function (context, req) {
  const date = "2024-02-18T12:14:28.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

