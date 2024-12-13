module.exports = async function (context, req) {
  const date = "2024-12-13T04:15:34.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

