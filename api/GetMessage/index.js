module.exports = async function (context, req) {
  const date = "2024-09-27T07:11:50.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

