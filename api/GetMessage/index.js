module.exports = async function (context, req) {
  const date = "2022-10-25T16:27:18.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

