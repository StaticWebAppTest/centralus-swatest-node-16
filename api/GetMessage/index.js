module.exports = async function (context, req) {
  const date = "2024-10-02T11:09:59.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

