module.exports = async function (context, req) {
  const date = "2022-10-05T05:42:01.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

