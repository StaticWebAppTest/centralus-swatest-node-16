module.exports = async function (context, req) {
  const date = "2023-02-02T10:10:31.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

