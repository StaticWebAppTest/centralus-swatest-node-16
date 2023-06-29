module.exports = async function (context, req) {
  const date = "2023-06-29T19:07:38.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

