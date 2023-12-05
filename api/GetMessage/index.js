module.exports = async function (context, req) {
  const date = "2023-12-05T14:09:08.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

