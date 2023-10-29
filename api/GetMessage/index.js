module.exports = async function (context, req) {
  const date = "2023-10-29T01:48:12.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

