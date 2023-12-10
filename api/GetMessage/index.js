module.exports = async function (context, req) {
  const date = "2023-12-10T22:08:04.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

