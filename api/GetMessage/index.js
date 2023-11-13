module.exports = async function (context, req) {
  const date = "2023-11-13T03:09:46.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

