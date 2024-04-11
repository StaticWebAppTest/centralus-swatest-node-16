module.exports = async function (context, req) {
  const date = "2024-04-11T21:09:07.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

