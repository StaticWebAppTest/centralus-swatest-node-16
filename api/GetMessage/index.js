module.exports = async function (context, req) {
  const date = "2024-08-23T07:11:05.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

