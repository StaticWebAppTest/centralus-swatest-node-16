module.exports = async function (context, req) {
  const date = "2024-06-01T17:09:07.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

