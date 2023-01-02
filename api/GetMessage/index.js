module.exports = async function (context, req) {
  const date = "2023-01-02T21:08:00.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

