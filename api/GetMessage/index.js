module.exports = async function (context, req) {
  const date = "2023-06-09T20:09:09.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

