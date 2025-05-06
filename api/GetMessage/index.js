module.exports = async function (context, req) {
  const date = "2025-05-06T06:19:05.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

