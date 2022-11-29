module.exports = async function (context, req) {
  const date = "2022-11-29T05:09:48.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

