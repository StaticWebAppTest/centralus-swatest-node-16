module.exports = async function (context, req) {
  const date = "2023-05-08T13:11:32.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

