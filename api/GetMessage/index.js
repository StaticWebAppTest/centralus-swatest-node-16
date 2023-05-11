module.exports = async function (context, req) {
  const date = "2023-05-11T09:08:53.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

