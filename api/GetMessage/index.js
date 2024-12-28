module.exports = async function (context, req) {
  const date = "2024-12-28T18:14:26.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

