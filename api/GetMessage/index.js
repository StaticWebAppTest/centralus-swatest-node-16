module.exports = async function (context, req) {
  const date = "2023-12-13T09:09:34.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

