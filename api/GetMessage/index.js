module.exports = async function (context, req) {
  const date = "2024-03-17T05:10:08.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

