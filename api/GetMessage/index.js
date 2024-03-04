module.exports = async function (context, req) {
  const date = "2024-03-04T15:10:22.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

