module.exports = async function (context, req) {
  const date = "2024-07-04T07:11:06.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

