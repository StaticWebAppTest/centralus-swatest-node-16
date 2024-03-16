module.exports = async function (context, req) {
  const date = "2024-03-16T09:08:18.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

