module.exports = async function (context, req) {
  const date = "2022-11-25T10:11:06.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

