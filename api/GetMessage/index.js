module.exports = async function (context, req) {
  const date = "2024-01-23T02:26:33.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

