module.exports = async function (context, req) {
  const date = "2023-10-02T21:07:51.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

