module.exports = async function (context, req) {
  const date = "2023-10-21T04:10:25.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

