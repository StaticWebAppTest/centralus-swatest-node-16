module.exports = async function (context, req) {
  const date = "2024-02-08T21:07:47.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

