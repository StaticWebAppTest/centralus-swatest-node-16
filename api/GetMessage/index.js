module.exports = async function (context, req) {
  const date = "2024-06-02T13:09:28.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

