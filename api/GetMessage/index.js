module.exports = async function (context, req) {
  const date = "2023-07-16T06:12:23.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

