module.exports = async function (context, req) {
  const date = "2023-03-28T12:19:00.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

