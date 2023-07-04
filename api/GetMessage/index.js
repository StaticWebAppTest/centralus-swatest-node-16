module.exports = async function (context, req) {
  const date = "2023-07-04T19:08:01.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

