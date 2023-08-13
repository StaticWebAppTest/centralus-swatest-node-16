module.exports = async function (context, req) {
  const date = "2023-08-13T11:06:21.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

