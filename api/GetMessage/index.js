module.exports = async function (context, req) {
  const date = "2023-02-22T12:19:09.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

