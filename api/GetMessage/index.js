module.exports = async function (context, req) {
  const date = "2023-08-27T06:10:37.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

