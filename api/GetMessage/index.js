module.exports = async function (context, req) {
  const date = "2024-01-13T15:08:30.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

