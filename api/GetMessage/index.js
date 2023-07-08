module.exports = async function (context, req) {
  const date = "2023-07-08T08:11:40.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

