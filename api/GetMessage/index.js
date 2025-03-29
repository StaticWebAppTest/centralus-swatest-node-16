module.exports = async function (context, req) {
  const date = "2025-03-29T15:12:30.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

