module.exports = async function (context, req) {
  const date = "2025-03-08T13:10:48.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

