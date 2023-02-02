module.exports = async function (context, req) {
  const date = "2023-02-02T12:18:25.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

