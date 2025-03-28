module.exports = async function (context, req) {
  const date = "2025-03-28T23:12:07.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

