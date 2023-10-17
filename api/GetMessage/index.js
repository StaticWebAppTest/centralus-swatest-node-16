module.exports = async function (context, req) {
  const date = "2023-10-17T19:07:00.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

