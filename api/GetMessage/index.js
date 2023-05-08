module.exports = async function (context, req) {
  const date = "2023-05-08T21:07:51.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

