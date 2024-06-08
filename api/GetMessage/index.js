module.exports = async function (context, req) {
  const date = "2024-06-08T04:13:06.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

