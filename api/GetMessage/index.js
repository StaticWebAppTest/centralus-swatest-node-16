module.exports = async function (context, req) {
  const date = "2023-07-27T16:10:47.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

