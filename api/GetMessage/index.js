module.exports = async function (context, req) {
  const date = "2024-09-11T21:10:46.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

