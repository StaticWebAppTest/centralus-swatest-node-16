module.exports = async function (context, req) {
  const date = "2023-04-08T13:09:29.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

