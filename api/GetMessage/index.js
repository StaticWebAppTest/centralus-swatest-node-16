module.exports = async function (context, req) {
  const date = "2023-05-06T21:07:46.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

