module.exports = async function (context, req) {
  const date = "2023-06-08T07:08:20.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

