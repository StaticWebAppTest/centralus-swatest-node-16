module.exports = async function (context, req) {
  const date = "2022-10-25T01:20:48.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

