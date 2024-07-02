module.exports = async function (context, req) {
  const date = "2024-07-02T17:09:38.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

