module.exports = async function (context, req) {
  const date = "2023-05-28T21:07:25.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

