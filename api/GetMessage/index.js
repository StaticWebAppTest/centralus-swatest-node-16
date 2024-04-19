module.exports = async function (context, req) {
  const date = "2024-04-19T09:09:42.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

