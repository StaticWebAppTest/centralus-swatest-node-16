module.exports = async function (context, req) {
  const date = "2023-03-25T21:07:24.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

