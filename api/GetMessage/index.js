module.exports = async function (context, req) {
  const date = "2023-10-02T11:07:29.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

