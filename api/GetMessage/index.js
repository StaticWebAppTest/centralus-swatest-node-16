module.exports = async function (context, req) {
  const date = "2024-09-21T06:14:43.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

