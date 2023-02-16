module.exports = async function (context, req) {
  const date = "2023-02-16T11:08:52.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

