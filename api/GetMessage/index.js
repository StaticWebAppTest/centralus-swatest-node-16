module.exports = async function (context, req) {
  const date = "2024-12-16T11:10:55.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

