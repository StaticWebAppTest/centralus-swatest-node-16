module.exports = async function (context, req) {
  const date = "2023-07-10T08:13:48.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

