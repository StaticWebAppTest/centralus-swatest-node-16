module.exports = async function (context, req) {
  const date = "2024-09-04T16:13:42.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

