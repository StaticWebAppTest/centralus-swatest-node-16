module.exports = async function (context, req) {
  const date = "2023-08-15T11:06:54.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

