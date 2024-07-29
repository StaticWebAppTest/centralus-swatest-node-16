module.exports = async function (context, req) {
  const date = "2024-07-29T09:12:08.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

