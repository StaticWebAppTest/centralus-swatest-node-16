module.exports = async function (context, req) {
  const date = "2024-05-29T05:10:37.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

