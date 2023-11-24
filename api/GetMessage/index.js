module.exports = async function (context, req) {
  const date = "2023-11-24T00:42:04.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

