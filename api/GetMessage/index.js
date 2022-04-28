module.exports = async function (context, req) {
  const date = "2022-04-28T05:35:09.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

