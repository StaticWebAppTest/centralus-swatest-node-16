module.exports = async function (context, req) {
  const date = "2024-02-16T13:09:30.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

