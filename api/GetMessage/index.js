module.exports = async function (context, req) {
  const date = "2023-11-10T04:10:39.463Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

