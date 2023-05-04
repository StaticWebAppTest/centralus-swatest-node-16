module.exports = async function (context, req) {
  const date = "2023-05-04T08:11:43.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

