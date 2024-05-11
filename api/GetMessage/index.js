module.exports = async function (context, req) {
  const date = "2024-05-11T01:47:17.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

