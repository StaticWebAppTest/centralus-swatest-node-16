module.exports = async function (context, req) {
  const date = "2024-07-27T02:31:22.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

