module.exports = async function (context, req) {
  const date = "2024-09-10T18:15:05.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

