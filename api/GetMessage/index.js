module.exports = async function (context, req) {
  const date = "2024-11-22T12:23:33.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

