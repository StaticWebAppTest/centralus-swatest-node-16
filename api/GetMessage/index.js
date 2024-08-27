module.exports = async function (context, req) {
  const date = "2024-08-27T10:11:11.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

