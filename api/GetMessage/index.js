module.exports = async function (context, req) {
  const date = "2024-04-13T16:11:10.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

