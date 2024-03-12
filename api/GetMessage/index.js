module.exports = async function (context, req) {
  const date = "2024-03-12T21:09:07.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

