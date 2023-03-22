module.exports = async function (context, req) {
  const date = "2023-03-22T19:07:25.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

