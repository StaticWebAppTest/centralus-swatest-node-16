module.exports = async function (context, req) {
  const date = "2025-05-04T18:16:11.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

