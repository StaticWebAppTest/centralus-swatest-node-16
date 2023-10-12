module.exports = async function (context, req) {
  const date = "2023-10-12T01:41:07.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

