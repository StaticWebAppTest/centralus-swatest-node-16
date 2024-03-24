module.exports = async function (context, req) {
  const date = "2024-03-24T07:07:44.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

