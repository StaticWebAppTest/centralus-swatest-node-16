module.exports = async function (context, req) {
  const date = "2024-02-29T09:09:54.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

