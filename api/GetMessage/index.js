module.exports = async function (context, req) {
  const date = "2024-07-17T18:13:42.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

