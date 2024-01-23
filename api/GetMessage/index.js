module.exports = async function (context, req) {
  const date = "2024-01-23T00:45:46.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

