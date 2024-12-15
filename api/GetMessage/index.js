module.exports = async function (context, req) {
  const date = "2024-12-15T09:11:58.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

