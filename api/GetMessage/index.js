module.exports = async function (context, req) {
  const date = "2024-12-17T09:13:45.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

