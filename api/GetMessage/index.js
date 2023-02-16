module.exports = async function (context, req) {
  const date = "2023-02-16T13:19:47.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

