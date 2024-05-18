module.exports = async function (context, req) {
  const date = "2024-05-18T22:08:22.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

