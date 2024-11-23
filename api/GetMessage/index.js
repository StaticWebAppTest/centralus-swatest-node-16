module.exports = async function (context, req) {
  const date = "2024-11-23T16:13:24.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

