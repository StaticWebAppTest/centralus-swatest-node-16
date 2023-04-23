module.exports = async function (context, req) {
  const date = "2023-04-23T12:16:18.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

