module.exports = async function (context, req) {
  const date = "2023-03-13T13:18:36.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

