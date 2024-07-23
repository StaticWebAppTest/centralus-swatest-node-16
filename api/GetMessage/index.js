module.exports = async function (context, req) {
  const date = "2024-07-23T09:11:27.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

