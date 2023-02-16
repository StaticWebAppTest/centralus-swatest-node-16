module.exports = async function (context, req) {
  const date = "2023-02-16T02:18:22.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

