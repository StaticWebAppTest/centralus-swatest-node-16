module.exports = async function (context, req) {
  const date = "2023-01-16T13:18:45.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

