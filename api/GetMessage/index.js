module.exports = async function (context, req) {
  const date = "2024-03-16T17:07:45.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

