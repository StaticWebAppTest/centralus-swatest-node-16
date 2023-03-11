module.exports = async function (context, req) {
  const date = "2023-03-11T12:16:18.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

