module.exports = async function (context, req) {
  const date = "2024-11-10T06:14:47.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

