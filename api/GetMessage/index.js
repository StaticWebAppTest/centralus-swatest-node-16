module.exports = async function (context, req) {
  const date = "2023-12-19T23:07:36.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

