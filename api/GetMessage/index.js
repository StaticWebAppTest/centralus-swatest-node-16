module.exports = async function (context, req) {
  const date = "2023-08-25T16:10:26.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

