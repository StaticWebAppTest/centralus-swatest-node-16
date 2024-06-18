module.exports = async function (context, req) {
  const date = "2024-06-18T19:08:22.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

