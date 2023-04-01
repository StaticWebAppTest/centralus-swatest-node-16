module.exports = async function (context, req) {
  const date = "2023-04-01T11:06:46.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

