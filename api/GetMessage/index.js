module.exports = async function (context, req) {
  const date = "2023-08-16T12:15:30.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

