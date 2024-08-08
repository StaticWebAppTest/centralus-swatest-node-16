module.exports = async function (context, req) {
  const date = "2024-08-08T11:10:05.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

