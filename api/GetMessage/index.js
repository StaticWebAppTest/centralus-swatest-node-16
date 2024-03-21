module.exports = async function (context, req) {
  const date = "2024-03-21T08:11:36.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

