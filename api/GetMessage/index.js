module.exports = async function (context, req) {
  const date = "2024-09-24T05:11:49.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

