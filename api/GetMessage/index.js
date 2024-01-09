module.exports = async function (context, req) {
  const date = "2024-01-09T14:09:14.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

