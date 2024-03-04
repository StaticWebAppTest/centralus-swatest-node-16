module.exports = async function (context, req) {
  const date = "2024-03-04T14:08:31.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

