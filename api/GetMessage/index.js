module.exports = async function (context, req) {
  const date = "2022-09-18T20:12:45.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

