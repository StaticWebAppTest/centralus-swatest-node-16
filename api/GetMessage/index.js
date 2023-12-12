module.exports = async function (context, req) {
  const date = "2023-12-12T06:12:27.463Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

