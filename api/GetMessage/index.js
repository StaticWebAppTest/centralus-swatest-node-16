module.exports = async function (context, req) {
  const date = "2024-05-23T09:11:47.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

