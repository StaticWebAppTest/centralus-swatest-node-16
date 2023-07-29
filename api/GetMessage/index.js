module.exports = async function (context, req) {
  const date = "2023-07-29T19:06:08.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

