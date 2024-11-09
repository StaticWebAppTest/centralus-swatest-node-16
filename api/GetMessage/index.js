module.exports = async function (context, req) {
  const date = "2024-11-09T10:10:39.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

