module.exports = async function (context, req) {
  const date = "2023-12-18T02:23:50.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

