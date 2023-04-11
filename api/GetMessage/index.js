module.exports = async function (context, req) {
  const date = "2023-04-11T10:09:56.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

