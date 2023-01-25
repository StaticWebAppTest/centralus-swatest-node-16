module.exports = async function (context, req) {
  const date = "2023-01-25T09:09:02.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

