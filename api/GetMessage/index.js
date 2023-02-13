module.exports = async function (context, req) {
  const date = "2023-02-13T19:08:05.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

