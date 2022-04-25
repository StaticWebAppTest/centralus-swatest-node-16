module.exports = async function (context, req) {
  const date = "2022-04-25T05:11:39.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

