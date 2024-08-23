module.exports = async function (context, req) {
  const date = "2024-08-23T08:14:26.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

