module.exports = async function (context, req) {
  const date = "2023-10-13T11:07:41.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

