module.exports = async function (context, req) {
  const date = "2024-11-10T19:09:20.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

