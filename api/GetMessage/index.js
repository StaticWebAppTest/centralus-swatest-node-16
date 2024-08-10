module.exports = async function (context, req) {
  const date = "2024-08-10T05:09:48.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

