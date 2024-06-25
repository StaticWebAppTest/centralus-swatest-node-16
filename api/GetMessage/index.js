module.exports = async function (context, req) {
  const date = "2024-06-25T05:10:13.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

