module.exports = async function (context, req) {
  const date = "2023-10-10T19:06:18.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

