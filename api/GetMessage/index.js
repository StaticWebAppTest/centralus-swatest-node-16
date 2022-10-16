module.exports = async function (context, req) {
  const date = "2022-10-16T01:19:25.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

