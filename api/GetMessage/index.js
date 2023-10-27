module.exports = async function (context, req) {
  const date = "2023-10-27T11:07:20.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

