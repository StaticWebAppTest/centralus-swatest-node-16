module.exports = async function (context, req) {
  const date = "2023-01-13T02:17:55.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

