module.exports = async function (context, req) {
  const date = "2023-07-06T08:13:25.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

