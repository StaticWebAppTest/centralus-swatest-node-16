module.exports = async function (context, req) {
  const date = "2023-11-27T15:09:45.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

