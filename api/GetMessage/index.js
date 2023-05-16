module.exports = async function (context, req) {
  const date = "2023-05-16T03:09:46.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

