module.exports = async function (context, req) {
  const date = "2024-03-24T11:06:44.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

