module.exports = async function (context, req) {
  const date = "2024-06-21T12:18:06.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

