module.exports = async function (context, req) {
  const date = "2024-06-06T07:10:47.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

