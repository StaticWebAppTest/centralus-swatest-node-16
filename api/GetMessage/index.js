module.exports = async function (context, req) {
  const date = "2023-10-02T17:08:06.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

