module.exports = async function (context, req) {
  const date = "2024-10-08T04:14:18.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

