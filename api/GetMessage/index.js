module.exports = async function (context, req) {
  const date = "2023-10-10T05:08:23.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

