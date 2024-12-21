module.exports = async function (context, req) {
  const date = "2024-12-21T06:14:53.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

