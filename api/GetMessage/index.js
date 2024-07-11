module.exports = async function (context, req) {
  const date = "2024-07-11T17:09:29.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

