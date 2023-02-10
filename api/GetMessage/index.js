module.exports = async function (context, req) {
  const date = "2023-02-10T23:09:46.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

