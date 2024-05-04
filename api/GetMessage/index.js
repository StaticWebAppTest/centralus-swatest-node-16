module.exports = async function (context, req) {
  const date = "2024-05-04T17:07:34.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

