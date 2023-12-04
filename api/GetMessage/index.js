module.exports = async function (context, req) {
  const date = "2023-12-04T04:11:25.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

