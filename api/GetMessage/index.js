module.exports = async function (context, req) {
  const date = "2024-04-11T10:10:19.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

