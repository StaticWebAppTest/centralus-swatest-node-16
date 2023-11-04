module.exports = async function (context, req) {
  const date = "2023-11-04T07:08:53.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

