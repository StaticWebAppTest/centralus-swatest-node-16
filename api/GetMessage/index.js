module.exports = async function (context, req) {
  const date = "2024-04-11T01:44:11.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

