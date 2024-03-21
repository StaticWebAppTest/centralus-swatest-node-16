module.exports = async function (context, req) {
  const date = "2024-03-21T04:11:36.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

