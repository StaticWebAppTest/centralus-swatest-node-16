module.exports = async function (context, req) {
  const date = "2025-01-28T18:15:45.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

