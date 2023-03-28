module.exports = async function (context, req) {
  const date = "2023-03-28T13:17:42.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

