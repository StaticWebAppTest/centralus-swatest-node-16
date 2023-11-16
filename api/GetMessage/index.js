module.exports = async function (context, req) {
  const date = "2023-11-16T13:12:33.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

