module.exports = async function (context, req) {
  const date = "2024-06-24T17:09:05.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

