module.exports = async function (context, req) {
  const date = "2024-06-18T05:10:53.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

