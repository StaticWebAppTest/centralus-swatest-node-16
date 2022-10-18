module.exports = async function (context, req) {
  const date = "2022-10-18T19:19:05.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

