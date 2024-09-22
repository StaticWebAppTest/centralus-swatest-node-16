module.exports = async function (context, req) {
  const date = "2024-09-22T14:09:09.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

