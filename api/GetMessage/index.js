module.exports = async function (context, req) {
  const date = "2023-12-03T13:09:51.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

