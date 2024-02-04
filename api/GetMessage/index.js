module.exports = async function (context, req) {
  const date = "2024-02-04T14:07:06.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

