module.exports = async function (context, req) {
  const date = "2024-03-18T11:08:27.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

