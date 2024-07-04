module.exports = async function (context, req) {
  const date = "2024-07-04T12:19:03.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

