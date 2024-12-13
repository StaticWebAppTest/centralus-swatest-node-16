module.exports = async function (context, req) {
  const date = "2024-12-13T06:18:10.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

