module.exports = async function (context, req) {
  const date = "2023-04-08T19:06:22.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

