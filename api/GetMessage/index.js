module.exports = async function (context, req) {
  const date = "2023-08-04T08:10:54.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

