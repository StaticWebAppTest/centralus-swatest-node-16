module.exports = async function (context, req) {
  const date = "2023-10-01T11:06:28.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

