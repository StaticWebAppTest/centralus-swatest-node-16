module.exports = async function (context, req) {
  const date = "2023-05-02T17:08:05.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

