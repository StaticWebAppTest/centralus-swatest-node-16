module.exports = async function (context, req) {
  const date = "2023-10-06T05:08:14.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

