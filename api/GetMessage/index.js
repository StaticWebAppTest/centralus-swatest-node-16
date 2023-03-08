module.exports = async function (context, req) {
  const date = "2023-03-08T07:09:24.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

