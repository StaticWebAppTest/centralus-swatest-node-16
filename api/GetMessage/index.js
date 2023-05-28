module.exports = async function (context, req) {
  const date = "2023-05-28T05:08:04.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

