module.exports = async function (context, req) {
  const date = "2023-02-20T13:19:04.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

