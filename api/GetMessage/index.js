module.exports = async function (context, req) {
  const date = "2024-11-20T15:12:45.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

