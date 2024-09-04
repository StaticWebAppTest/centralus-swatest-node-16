module.exports = async function (context, req) {
  const date = "2024-09-04T02:07:09.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

