module.exports = async function (context, req) {
  const date = "2023-10-02T15:09:24.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

