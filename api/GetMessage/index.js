module.exports = async function (context, req) {
  const date = "2023-08-08T15:09:19.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

