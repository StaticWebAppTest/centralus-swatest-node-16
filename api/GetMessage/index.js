module.exports = async function (context, req) {
  const date = "2024-01-25T06:12:53.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

