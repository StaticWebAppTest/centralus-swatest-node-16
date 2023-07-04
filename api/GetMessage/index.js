module.exports = async function (context, req) {
  const date = "2023-07-04T02:54:55.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

