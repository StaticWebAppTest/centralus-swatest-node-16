module.exports = async function (context, req) {
  const date = "2023-05-29T19:07:08.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

