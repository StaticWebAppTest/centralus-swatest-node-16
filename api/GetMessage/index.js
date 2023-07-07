module.exports = async function (context, req) {
  const date = "2023-07-07T01:02:26.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

