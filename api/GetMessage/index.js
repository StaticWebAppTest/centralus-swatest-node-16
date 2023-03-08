module.exports = async function (context, req) {
  const date = "2023-03-08T13:20:14.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

