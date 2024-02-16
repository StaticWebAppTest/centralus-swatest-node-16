module.exports = async function (context, req) {
  const date = "2024-02-16T09:08:58.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

