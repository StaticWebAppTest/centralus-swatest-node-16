module.exports = async function (context, req) {
  const date = "2023-03-16T21:08:30.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

