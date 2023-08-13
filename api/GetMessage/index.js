module.exports = async function (context, req) {
  const date = "2023-08-13T16:09:49.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

