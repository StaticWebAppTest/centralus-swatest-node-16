module.exports = async function (context, req) {
  const date = "2023-09-21T14:08:24.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

