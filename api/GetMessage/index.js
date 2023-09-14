module.exports = async function (context, req) {
  const date = "2023-09-14T13:11:47.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

