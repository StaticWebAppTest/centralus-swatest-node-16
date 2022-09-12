module.exports = async function (context, req) {
  const date = "2022-09-12T19:11:24.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

