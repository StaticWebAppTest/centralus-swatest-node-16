module.exports = async function (context, req) {
  const date = "2024-12-21T09:10:42.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

