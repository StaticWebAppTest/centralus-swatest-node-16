module.exports = async function (context, req) {
  const date = "2024-03-22T11:07:59.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

