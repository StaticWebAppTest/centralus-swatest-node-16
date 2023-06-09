module.exports = async function (context, req) {
  const date = "2023-06-09T16:11:01.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

