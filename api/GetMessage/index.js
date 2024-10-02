module.exports = async function (context, req) {
  const date = "2024-10-02T05:11:53.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

