module.exports = async function (context, req) {
  const date = "2025-02-13T21:11:07.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

