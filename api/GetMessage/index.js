module.exports = async function (context, req) {
  const date = "2024-09-12T06:16:15.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

