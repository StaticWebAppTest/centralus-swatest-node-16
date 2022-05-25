module.exports = async function (context, req) {
  const date = "2022-05-25T05:16:18.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

