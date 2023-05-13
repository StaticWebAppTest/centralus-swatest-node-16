module.exports = async function (context, req) {
  const date = "2023-05-13T19:06:25.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

