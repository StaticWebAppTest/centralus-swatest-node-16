module.exports = async function (context, req) {
  const date = "2023-06-06T19:07:12.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

