module.exports = async function (context, req) {
  const date = "2023-03-16T15:11:37.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

