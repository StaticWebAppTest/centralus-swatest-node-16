module.exports = async function (context, req) {
  const date = "2024-06-11T07:10:19.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

