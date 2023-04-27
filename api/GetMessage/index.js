module.exports = async function (context, req) {
  const date = "2023-04-27T08:11:41.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

