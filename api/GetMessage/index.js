module.exports = async function (context, req) {
  const date = "2023-09-25T16:11:33.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

