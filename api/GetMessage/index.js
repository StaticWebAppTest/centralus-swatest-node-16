module.exports = async function (context, req) {
  const date = "2024-04-19T05:09:35.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

