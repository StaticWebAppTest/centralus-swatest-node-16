module.exports = async function (context, req) {
  const date = "2023-07-04T03:23:48.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

