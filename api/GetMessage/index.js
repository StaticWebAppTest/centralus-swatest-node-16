module.exports = async function (context, req) {
  const date = "2023-10-12T02:14:53.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

