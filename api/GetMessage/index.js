module.exports = async function (context, req) {
  const date = "2024-12-04T09:13:41.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

