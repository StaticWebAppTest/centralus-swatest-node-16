module.exports = async function (context, req) {
  const date = "2023-06-08T09:08:43.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

