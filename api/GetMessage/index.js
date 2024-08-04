module.exports = async function (context, req) {
  const date = "2024-08-04T09:10:26.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

