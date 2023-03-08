module.exports = async function (context, req) {
  const date = "2023-03-08T14:09:54.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

