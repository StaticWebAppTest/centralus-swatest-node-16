module.exports = async function (context, req) {
  const date = "2023-11-08T05:08:49.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

