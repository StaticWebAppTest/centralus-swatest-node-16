module.exports = async function (context, req) {
  const date = "2022-07-25T16:14:57.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

