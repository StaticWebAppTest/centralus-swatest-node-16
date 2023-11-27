module.exports = async function (context, req) {
  const date = "2023-11-27T18:11:45.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

