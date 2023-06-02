module.exports = async function (context, req) {
  const date = "2023-06-02T05:08:36.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

