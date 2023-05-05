module.exports = async function (context, req) {
  const date = "2023-05-05T16:11:18.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

