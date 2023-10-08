module.exports = async function (context, req) {
  const date = "2023-10-08T11:06:36.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

