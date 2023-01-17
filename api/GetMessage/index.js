module.exports = async function (context, req) {
  const date = "2023-01-17T16:12:37.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

