module.exports = async function (context, req) {
  const date = "2024-12-27T04:14:07.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

