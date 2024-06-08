module.exports = async function (context, req) {
  const date = "2024-06-08T21:08:33.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

