module.exports = async function (context, req) {
  const date = "2023-09-06T08:11:25.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

