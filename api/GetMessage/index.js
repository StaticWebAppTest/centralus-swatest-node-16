module.exports = async function (context, req) {
  const date = "2024-01-05T09:09:25.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

