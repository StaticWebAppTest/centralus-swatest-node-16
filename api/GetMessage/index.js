module.exports = async function (context, req) {
  const date = "2023-10-16T13:13:02.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

