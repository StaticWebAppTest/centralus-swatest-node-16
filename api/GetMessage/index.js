module.exports = async function (context, req) {
  const date = "2024-03-04T04:39:03.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

