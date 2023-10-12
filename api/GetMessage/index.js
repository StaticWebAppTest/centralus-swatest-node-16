module.exports = async function (context, req) {
  const date = "2023-10-12T05:08:30.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

