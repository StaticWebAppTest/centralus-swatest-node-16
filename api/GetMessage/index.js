module.exports = async function (context, req) {
  const date = "2024-03-09T11:08:23.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

