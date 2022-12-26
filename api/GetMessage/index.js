module.exports = async function (context, req) {
  const date = "2022-12-26T05:09:11.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

