module.exports = async function (context, req) {
  const date = "2024-06-13T10:10:23.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

