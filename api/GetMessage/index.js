module.exports = async function (context, req) {
  const date = "2024-06-23T05:10:04.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

