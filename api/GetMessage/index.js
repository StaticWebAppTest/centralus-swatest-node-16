module.exports = async function (context, req) {
  const date = "2024-09-08T08:13:03.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

