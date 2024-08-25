module.exports = async function (context, req) {
  const date = "2024-08-25T08:12:50.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

