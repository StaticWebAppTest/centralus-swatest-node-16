module.exports = async function (context, req) {
  const date = "2023-09-08T06:11:42.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

