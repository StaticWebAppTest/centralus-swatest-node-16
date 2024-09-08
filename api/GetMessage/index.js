module.exports = async function (context, req) {
  const date = "2024-09-08T21:09:52.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

