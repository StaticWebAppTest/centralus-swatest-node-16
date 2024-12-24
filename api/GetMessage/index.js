module.exports = async function (context, req) {
  const date = "2024-12-24T17:09:46.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

