module.exports = async function (context, req) {
  const date = "2024-06-04T02:27:00.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

