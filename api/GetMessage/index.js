module.exports = async function (context, req) {
  const date = "2024-04-12T05:10:06.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

