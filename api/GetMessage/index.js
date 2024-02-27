module.exports = async function (context, req) {
  const date = "2024-02-27T16:11:53.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

