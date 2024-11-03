module.exports = async function (context, req) {
  const date = "2024-11-03T21:10:36.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

