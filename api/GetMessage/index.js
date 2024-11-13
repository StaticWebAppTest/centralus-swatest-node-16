module.exports = async function (context, req) {
  const date = "2024-11-13T17:10:26.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

