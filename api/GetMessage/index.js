module.exports = async function (context, req) {
  const date = "2024-09-19T05:11:36.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

