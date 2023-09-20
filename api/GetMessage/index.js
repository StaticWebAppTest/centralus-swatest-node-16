module.exports = async function (context, req) {
  const date = "2023-09-20T09:08:56.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

