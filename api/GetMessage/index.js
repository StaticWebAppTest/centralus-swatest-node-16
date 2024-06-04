module.exports = async function (context, req) {
  const date = "2024-06-04T23:11:14.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

