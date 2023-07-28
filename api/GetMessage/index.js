module.exports = async function (context, req) {
  const date = "2023-07-28T05:08:06.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

