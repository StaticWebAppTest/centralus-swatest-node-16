module.exports = async function (context, req) {
  const date = "2023-01-10T05:08:53.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

