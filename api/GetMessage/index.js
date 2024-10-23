module.exports = async function (context, req) {
  const date = "2024-10-23T05:12:10.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

