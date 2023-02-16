module.exports = async function (context, req) {
  const date = "2023-02-16T21:09:08.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

