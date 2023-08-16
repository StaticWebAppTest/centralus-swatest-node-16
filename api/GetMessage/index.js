module.exports = async function (context, req) {
  const date = "2023-08-16T17:07:27.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

