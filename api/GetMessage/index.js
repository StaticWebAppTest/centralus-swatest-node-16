module.exports = async function (context, req) {
  const date = "2023-09-16T02:12:45.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

