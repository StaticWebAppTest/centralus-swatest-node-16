module.exports = async function (context, req) {
  const date = "2023-03-21T10:09:56.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

