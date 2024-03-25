module.exports = async function (context, req) {
  const date = "2024-03-25T11:08:53.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

