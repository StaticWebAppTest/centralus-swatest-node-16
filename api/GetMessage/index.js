module.exports = async function (context, req) {
  const date = "2025-02-23T21:09:46.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

