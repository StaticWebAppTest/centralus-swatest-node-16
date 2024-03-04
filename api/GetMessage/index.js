module.exports = async function (context, req) {
  const date = "2024-03-04T16:12:18.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

