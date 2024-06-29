module.exports = async function (context, req) {
  const date = "2024-06-29T05:11:33.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

