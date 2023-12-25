module.exports = async function (context, req) {
  const date = "2023-12-25T21:07:43.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

