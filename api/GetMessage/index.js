module.exports = async function (context, req) {
  const date = "2024-02-10T03:10:01.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

