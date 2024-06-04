module.exports = async function (context, req) {
  const date = "2024-06-04T05:12:11.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

