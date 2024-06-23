module.exports = async function (context, req) {
  const date = "2024-06-23T02:00:45.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

