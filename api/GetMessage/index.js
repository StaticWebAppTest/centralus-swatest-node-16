module.exports = async function (context, req) {
  const date = "2025-07-25T15:15:21.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

