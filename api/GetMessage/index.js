module.exports = async function (context, req) {
  const date = "2023-12-16T19:07:12.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

