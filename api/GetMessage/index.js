module.exports = async function (context, req) {
  const date = "2023-10-17T15:09:45.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

